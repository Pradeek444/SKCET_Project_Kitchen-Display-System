package com.kds.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Analysis {
  
	
    
    
    @Id
    private int year;
    private int totalorders;
    private int menuitems;
    private double revenue;
    private int customers;
    private int currentorders;
    private int pendingorders;
    private int messages;
    private int staffpresent;
    private int staffabsent;
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public int getTotalorders() {
		return totalorders;
	}
	public void setTotalorders(int totalorders) {
		this.totalorders = totalorders;
	}
	public int getMenuitems() {
		return menuitems;
	}
	public void setMenuitems(int menuitems) {
		this.menuitems = menuitems;
	}
	public double getRevenue() {
		return revenue;
	}
	public void setRevenue(double revenue) {
		this.revenue = revenue;
	}
	public int getCustomers() {
		return customers;
	}
	public void setCustomers(int customers) {
		this.customers = customers;
	}
	public int getCurrentorders() {
		return currentorders;
	}
	public void setCurrentorders(int currentorders) {
		this.currentorders = currentorders;
	}
	public int getPendingorders() {
		return pendingorders;
	}
	public void setPendingorders(int pendingorders) {
		this.pendingorders = pendingorders;
	}
	public int getMessages() {
		return messages;
	}
	public void setMessages(int messages) {
		this.messages = messages;
	}
	public int getStaffpresent() {
		return staffpresent;
	}
	public void setStaffpresent(int staffpresent) {
		this.staffpresent = staffpresent;
	}
	public int getStaffabsent() {
		return staffabsent;
	}
	public void setStaffabsent(int staffabsent) {
		this.staffabsent = staffabsent;
	}
    
    
}
