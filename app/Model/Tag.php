<?php

	App::uses('AppModel', 'Model');

	class Tag extends Model {
		public $name = 'Tag';
		public $belongsTo = array(
	        'User' => array(
	            'className' => 'User',
	            'foreignKey' => 'user_id'
	        )
	    );
	}