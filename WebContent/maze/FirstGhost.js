FirstGhost= function(scene , collidableObjects ){
	
	var n = 1;
	
	var WIDTH = 1000,
 	HEIGHT = 800;
	
	var keyboard = {};
	
	var camera;
	var controls;
	var controlsEnabled = false;
	var PLAYERCOLLISIONDISTANCE = 20;

	// HTML elements to be changed
	

	// Flags to determine which direction the player is moving
	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;

	// Velocity vector for the player
	var playerVelocity = new THREE.Vector3();

	// How fast the player will move
	var PLAYERSPEED = 500;
	
	
	camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 20000);
	camera.position.set(0,0,0);
	camera.lookAt(0,0,0);
	
	controls = new THREE.PointerLockControls(camera);
	
	getPointerLock();
	listenForPlayerMovement();
	scene.add(controls.getObject());
	controls.getObject().translateY(200);
	
	
	function getPointerLock() {
		 document.onclick = function () {
		   container.requestPointerLock();
		 }
		 document.addEventListener('pointerlockchange', lockChange, false); 
	}

		// Switch the controls on or off
		function lockChange() {
		    // Turn on controls
		    if (document.pointerLockElement === container) {
		        blocker.style.display = "none";
		        controls.enabled = true;
		        controlsEnabled = true;
		    // Turn off the controls
		    } else {
		      // Display the blocker and instruction
		        blocker.style.display = "";
		        controls.enabled = false;
		        controlsEnabled = false;
		    }
		}

		function listenForPlayerMovement() 
		{

	   
			var onKeyDown = function(event) {
		    	
				if(event.keyCode == 38 || event.keyCode == 87)
				{
					moveForward = true;
				}
	    	
				if(event.keyCode == 37 || event.keyCode == 65)
				{
					moveLeft = true;
				}	
	    	
				if(event.keyCode == 40 || event.keyCode == 83)
				{
					moveBackward = true;
				}
	    	
				if(event.keyCode == 39 || event.keyCode == 68)
				{
					moveRight = true;
				}

	   
			};

			var onKeyUp = function(event) {
		    	
				if(event.keyCode == 38 || event.keyCode == 87)
				{
					moveForward = false;
				}
	    	
				if(event.keyCode == 37 || event.keyCode == 65)
				{
					moveLeft = false;
				}	
	    	
				if(event.keyCode == 40 || event.keyCode == 83)
				{
					moveBackward = false;
				}
	    	
				if(event.keyCode == 39 || event.keyCode == 68)
				{
					moveRight = false;
				}

	   
			};

	 		// Add event listeners for when movement keys are pressed and released
	  		document.addEventListener('keydown', onKeyDown, false);
	 		document.addEventListener('keyup', onKeyUp, false);
		}
	this.animatePlayer = function (delta) 
		{
			
			
		
		if (detectPlayerCollision() == false)
		{
			if (moveForward) 
			{
				playerVelocity.z = -PLAYERSPEED;
			} 
			if (moveBackward) 
			{
				playerVelocity.z = PLAYERSPEED;
			} 
			if (moveLeft) 
			{
				playerVelocity.x = -PLAYERSPEED;
			} 
			if (moveRight) 
			{
				playerVelocity.x = PLAYERSPEED;
			}
			if(!( moveForward || moveBackward))
				playerVelocity.z = 0;
			if(!( moveLeft ||moveRight)) 
				playerVelocity.x = 0;
			controls.getObject().translateX(playerVelocity.x * delta);
			controls.getObject().translateZ(playerVelocity.z * delta);
				 
			}
		}

		function detectPlayerCollision() 
		{
		    // The rotation matrix to apply to our direction vector
		    // Undefined by default to indicate ray should coming from front
		    var rotationMatrix;
		    // Get direction of camera
		    var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();

		    // Check which direction we're moving (not looking)
		    // Flip matrix to that direction so that we can reposition the ray
		    if (moveBackward) 
		    {
		        rotationMatrix = new THREE.Matrix4();
		        rotationMatrix.makeRotationY(degreesToRadians(180));
		    }
		    else if (moveLeft) 
		    {
		        rotationMatrix = new THREE.Matrix4();
		        rotationMatrix.makeRotationY(degreesToRadians(90));
		    }
		    else if (moveRight) 
		    {
		        rotationMatrix = new THREE.Matrix4();
		        rotationMatrix.makeRotationY(degreesToRadians(270));
		    }

		    // Player is not moving forward, apply rotation matrix needed
		    if (rotationMatrix !== undefined) 
		    {
		        cameraDirection.applyMatrix4(rotationMatrix);
		    }

		    // Apply ray to player camera
		    var rayCaster = new THREE.Raycaster(controls.getObject().position, cameraDirection);

		    // If our ray hit a collidable object, return true
		    if (rayIntersect(rayCaster, PLAYERCOLLISIONDISTANCE)) 
		    {
		        return true;
		    } 
		    else 
		    {
		        return false;
		    }
		}

		function rayIntersect(ray, distance) {
	    var intersects = ray.intersectObjects(collidableObjects);
	    for (var i = 0; i < intersects.length; i++) {
	        // Check if there's a collision
	        if (intersects[i].distance < distance) {
	            return true;
	        }
	    }
	    return false;
	}
	function degreesToRadians(degrees) {
	  return degrees * Math.PI / 180;
	}

	function radiansToDegrees(radians) {
	  return radians * 180 / Math.PI;
	}
	
	this.getCamera  = function ()
	{
		return camera;
	}
	
	this.getControls  = function ()
	{
		return controls;
	}
	
	this.translateX = function(x)
	{
		controls.getObject().translateX(x);
	}
	
	this.translateZ = function(x)
	{
		controls.getObject().translateZ(x);
	}
	
	this.getDirectionX = function()
	{
		return controls.getObject().position.x;
	}
	
	this.getDirectionZ = function()
	{
		return controls.getObject().position.z;
	}
	
	
	
	
}