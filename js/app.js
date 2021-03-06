angular.module('weatherApp', [])
  .controller('weatherController', function($scope, $http, $interval){
    
    //getting data from openweathermapAPI and calling at 30 second intervals
    $interval(

	$scope.fetch = function(value) {
		
		
		if(value==1)
		
			$scope.search=$scope.search1;
			
		else if(value==2)
		
			$scope.search=$scope.search2;
			
		else if(value==3)
		
			$scope.search=$scope.search3;
		
		else if(value==4)
		
			$scope.search=$scope.search4;
		
		else if(value==5)
		
			$scope.search=$scope.search5;
		
		else if(value==6)
		
			$scope.search=$scope.search6;
		
		else if(value==7)
		
			$scope.search=$scope.search7;
		
		else if(value==8)
		
			$scope.search=$scope.search8;
		
		else
			{
				$scope.search=$scope.search0;
			}



	var url1="http://api.openweathermap.org/data/2.5/weather?q=" + $scope.search + "&units=metric&APPID=7eb97e1e80a73c36c5ee2d2e49f5f398";


	$http({
	method: 'GET',
	url: url1
	})
	.then(function(response)
			{ 
	$scope.exist=0;


	$scope.details = response.data; 	


	
	$scope.details = response.data; 	


	$scope.weather = JSON.stringify($scope.details).toLowerCase();
	
	//lowercase matching, since cities name might be given in Caps

	var data=$scope.weather;

	

	var string=($scope.search).toLowerCase();
	



	var string=$scope.search;
	string.toLowerCase();



	if(data.match(string)) 
	{	

//Weather allotment based on keywords 
		$scope.exist=1;


		if($scope.weather.match("haze") || $scope.weather.match("fog") || $scope.weather.match("smoke"))
			{
			$scope.class="haze";
			
			}
		
		else if(($scope.weather.match("clear")) || ($scope.weather.match("Clear")) || $scope.weather.match("sunny")) 
		
			$scope.class="sunny";

		else if($scope.weather.match("snow")) 
		
			$scope.class="snowy";


		else if($scope.weather.match("shower") || $scope.weather.match("rain")) 

			$scope.class="rainy";

		else if($scope.weather.match("cloud"))
	
			$scope.class="cloudy";
		
		else

			$scope.class="class";

//details & class allotment 

		if(value==1)
		{
			$scope.details1=$scope.details;
			$scope.class1=$scope.class;
			
		}
		else if(value==2)
		{
			$scope.details2=$scope.details;
			$scope.class2=$scope.class;
		}	

		else if(value==3)
		{
			$scope.details3=$scope.details;
			$scope.class3=$scope.class;
		}

		else if(value==4)
		{
			$scope.details4=$scope.details;
			$scope.class4=$scope.class;
		}

		else if(value==5)
		{
			$scope.details5=$scope.details;
			$scope.class5=$scope.class;
		}

		else if(value==6)
		{
			$scope.details6=$scope.details;
			$scope.class6=$scope.class;
		}

		else if(value==7)
		{
			$scope.details7=$scope.details;
			$scope.class7=$scope.class;
		}

		else if(value==8)
		{
			$scope.details8=$scope.details;
			$scope.class8=$scope.class;
		}	

		else
			{	//implies value  = 0, first panel
				$scope.details0=$scope.details;
				$scope.class0=$scope.class;
			}


	}
	else{
		//City does not exist
		$scope.exist=0;

	}//end of main else

}); //end of http.get function

	},30000); //end of interval function





    }); //end of controller

  
