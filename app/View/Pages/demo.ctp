<!-- Libraries --> 
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>

<!-- Entry point -->
<script src="js/app.js"></script>

<!-- Controllers -->
<script src="js/controllers/table.js"></script>
<script src="js/controllers/details.js"></script>

<!-- Services -->
<script src="js/factories/dataService.js"></script>
<script src="js/factories/notificationService.js"></script>
<script src="js/factories/logService.js"></script>

<!-- View itself -->
<div class="demo-wrapper" ng-app="demoApp">
	<div class="demo-table" ng-controller="TableController"></div>
	<div class="demo-details" ng-controller="DetailsController"></div>
</div>