<template>
	<div>
		<div class="page-sign-container">
			<div class="signin-header">
				<img src="../../assets/logo.png" class="logo_img"/>
			</div>
			<div class="signin-body">
				<div class="container">
					<login-form/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as Three from 'three'
	import { LoginForm } from './components'
	
	export default {
		name: 'Login',
		data() {
			return {
				scene: '',
				camera: '',
				renderer: '',
				container: '',
				aspect: '',
				fov: '',
				plane: '',
				far: '',
				mouseX: '',
				mouseY: '',
				windowHalfX: '',
				windowHalfY: '',
				geometry: '',
				starStuff: '',
				materialOptions: '',
				stars: ''
			}
		},
		components: {
			LoginForm
		},
		methods: {
			init() {
				this.container = document.createElement(`div`);
				document.body.appendChild(this.container);

				this.mouseX = 0;
				this.mouseY = 0;

				this.aspect = window.innerWidth / window.innerHeight;
				this.fov = 40;
				this.plane = 1;
				this.far = 800;

				this.windowHalfX = window.innerWidth / 2;
				this.windowHalfY = window.innerHeight / 2;

				this.camera = new Three.PerspectiveCamera(
					this.fov,
					this.aspect,
					this.plane,
					this.far
				);

				this.camera.position.z = this.far / 2;

				this.scene = new Three.Scene({
					antialias: true
				});
				this.scene.fog = new Three.FogExp2(0x1b1b1b, 0.0001);

				this.starForge();

				this.renderer = new Three.WebGLRenderer({
					antialias: true,
					alpha: true
				});
				this.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
				this.renderer.setSize(window.innerWidth, window.innerHeight);
				this.renderer.autoClear = false;
				this.renderer.setClearColor(0x000000, 0.0);
				this.container.appendChild(this.renderer.domElement);

				document.addEventListener('mousemove', this.onMouseMove, false);
			},
			starForge() {
				var amount = 45000;
				this.geometry = new Three.SphereGeometry(1000, 100, 50);

				this.materialOptions = {
					color: new Three.Color(0xffffff),
					size: 1.1,
					transparency: true,
					opacity: 0.8
				};

				this.starStuff = new Three.PointsMaterial(this.materialOptions);

				for(var i = 0; i < amount; i++) {
					var item = new Three.Vector3();
					item.x = Math.random() * 2000 - 1000;
					item.y = Math.random() * 2000 - 1000;
					item.z = Math.random() * 2000 - 1000;

					this.geometry.vertices.push(item);
				}

				this.stars = new Three.PointCloud(this.geometry, this.starStuff);
				this.scene.add(this.stars);
			},
			animate() {
				requestAnimationFrame(this.animate);
				this.render();
			},
			render() {
				this.camera.position.x += (-this.mouseX - this.camera.position.x) * 0.005;
				this.camera.position.y += (this.mouseY - this.camera.position.y) * 0.005;
				this.camera.lookAt(this.scene.position);
				this.renderer.render(this.scene, this.camera);
			},
			onMouseMove(e) {
				this.mouseX = e.clientX - this.windowHalfX;
				this.mouseY = e.clientY - this.windowHalfY;
			}
		},
		mounted() {
			this.init();
			this.animate();
		}
	}
</script>

<style>
	@import url("../../style/login.css");
</style>