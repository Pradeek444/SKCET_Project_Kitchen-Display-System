package com.kds.models;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class User {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int Id;
		
		private String email;
		private String password;
		private String role;
		private String name;
		
		public User(int id, String email, String password,String role,String name) {
			super();
			this.Id = id;
			this.email = email;
			this.password = password;
			this.role=role;
			this.name=name;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getRole() {
			return role;
		}
		public void setRole(String role) {
			this.role = role;
		}
		public User() {}
		public int getId() {
			return Id;
		}
		public void setId(int id) {
			Id = id;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
}
