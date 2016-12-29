<?php

	App::uses('AppModel', 'Model');

	class Action extends Model {
		public $name = 'Action';
		public $belongsTo = array(
	        'User' => array(
	            'className' => 'User',
	            'foreignKey' => 'user_id',
	            'fields' => array('action'
	        )
	    );
	}