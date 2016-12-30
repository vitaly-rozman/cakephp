<?php

    class UsersController extends AppController {

        public $components = array('RequestHandler');

        public function index() {
            

            $q = "SELECT DISTINCT users.id, first_name, last_name, a.action FROM users 
                LEFT JOIN tags_users ON (tags_users.user_id = users.id)
                LEFT JOIN (SELECT user_id, action, MAX(modified) FROM actions GROUP BY user_id) a ON (a.user_id = users.id)
                WHERE tag_id IN (
                    SELECT id FROM tags WHERE tag_name LIKE 'javascript'
                ) AND first_name IS NOT NULL AND last_name IS NOT NULL 
                LIMIT 20";

            //$users = $this->User->find('all');
            $users = $this->User->query($q);
            $this->set(array(
                'users' => $users,
                '_serialize' => array('users')
            ));
        }

        public function edit($id) {
            $this->User->id = $id;
            if ($this->User->save($this->request->data)) {
                $message = 'ok';
            } else {
                $message = 'error';
            }
            $this->set(array(
                'message' => $message,
                '_serialize' => array('message')
            ));
        }

    }