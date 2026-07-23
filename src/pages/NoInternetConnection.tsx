
function NoInternetConnection() {
  	return (
	    <div className="flex min-h-screen items-center justify-center">
	      	<div className="text-center">
		        <h1 className="text-3xl font-bold text-red-600">
		          No Internet Connection
		        </h1>
		        <p className="mt-2 text-gray-600">
		          Please check your internet connection and try again.
		        </p>
	      	</div>
	    </div>
  	);
}

export default NoInternetConnection;