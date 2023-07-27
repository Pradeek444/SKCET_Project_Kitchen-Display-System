package com.kds.service;

import org.springframework.stereotype.Service;

import com.kds.repositories.UserRepo;
import com.kds.repositories.OrderRepo;
import com.kds.repositories.PriceRepo;
import com.kds.models.User;
import com.kds.models.Orders;
import com.kds.models.Price;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class UserService {
	
	@Autowired
	private UserRepo Repo;
	
	@Autowired
	private OrderRepo orepo;
	
	@Autowired
	private PriceRepo prepo;
	
    public boolean deleteStaff(int id) {
        if (Repo.findById(id).isPresent()) {
            Repo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    //Delete Order
    public boolean deleteOrder(int ordid) {
    	if(orepo.findById(ordid).isPresent()) {
    		orepo.deleteById(ordid);
    		return true;
    	}else {
    		return false;
    	}
    }
    public List<User> getAllStaff() {
        return Repo.findAll();
    }
     //User Signup
	public String SignUpx(User staffx) {
        String email = staffx.getEmail();
        User staffxAuth = Repo.findByEmail(email);
        if (staffxAuth == null) {
            Repo.save(staffx);
            return "Signup Successful !";
        } else {
            if (staffxAuth.getEmail().equals(email)) {
                return "Email ID Already Exists";
            } else {
                return "Invalid Email ID";
            }
        }
    } 
	//User Login
	public String Loginx(String email, String password) {
		User userx = Repo.findByEmail(email);
		if (userx == null) {
			return "Invalid Email !";
		} else {
			if (userx.getPassword().equals(password) ) {
				return "Login Successful !";
				
			} else {
				return "Invalid Password";
			}
		}
	}
	
	//Create orders

    public Orders createOrder(Orders ord) {
        return orepo.save(ord);
    }

    //get Order

    public List<Orders> getAllOrder() {
        return orepo.findAll();
    }
    
    //Create Prices
    public Price createPrice(Price p) {
        return prepo.save(p);
    }
    //get prices
    public List<Price> getAllPrices(){
    	return prepo.findAll();
    }
  //Get Role
	  
	  public String getRolex(String email) {
		  User userx = Repo.findByEmail(email);
		  return userx.getRole();
	  }
    
    
	


  
}