<!-- Libraries --> 
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>

<!-- Entry point -->
<script src="js/app.js"></script>

<!-- Controllers -->
<script src="js/controllers/table.js"></script>
<script src="js/controllers/details.js"></script>

<!-- Services -->
<script src="js/factories/dataService.js"></script>
<script src="js/factories/editUserService.js"></script>

<!-- View itself -->
<div class="demo-wrapper" ng-app="demoApp" ng-controller="MainController">
	<div class="demo-table" ng-controller="TableController">
		<h3>User List</h3>
		<table>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Action</th>
			</tr>
			<tr ng-repeat="user in users" data-id="{{user.id}}" ng-click="editUser(user)">
    			<td>{{ user.first_name }}</td>
    			<td>{{ user.last_name }}</td>
    			<td>{{ user.action }}</td>
  			</tr>
		</table>
	</div>
	<div class="demo-details" ng-controller="DetailsController">
		<h3>Edit User</h3>
		<div class="edit-wrapper">
			<label>First name: </label>
			<span ng-hide="isEditMode" ng-click="changeMode(true)"> {{activeUser.first_name}}</span>
			<input ng-show="isEditMode" type="text"  name="first_name" ng-model="activeUser.first_name"/>
			<label>Last name: </label>
			<span ng-hide="isEditMode" ng-click="changeMode(true)"> {{activeUser.last_name}}</span>
			<input ng-show="isEditMode" type="text" name="last_name" ng-model="activeUser.last_name"/>
			<br />
			<button ng-click="userUpdate(activeUser)" ng-show="isEditMode">Update</button>
		</div>
	</div>
	<div style="clear:both;"></div>
</div>