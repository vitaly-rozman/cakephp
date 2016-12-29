<?php

	App::uses('AppModel', 'Model');

	class User extends Model {
		public $name = 'User';
		public $hasMany = array(
	        'UserTags' => array(
	            'className' => 'UserTag',
	            'fields' => array('tag'),
	            'foreignKey' => 'user_id'
	        ),
	        'UserActions' => array(
	            'className' => 'UserAction',
	            'fields' => array('action'),
	            'foreignKey' => 'user_id'
	        )
    	);
	}