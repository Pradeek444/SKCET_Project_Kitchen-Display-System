package com.feedback.service;

import org.springframework.stereotype.Service;

import com.feedback.models.FeedBack;
import com.feedback.repositories.FeedBackRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class FeedBackService {
  @Autowired
  private FeedBackRepo repo;
  
  public FeedBack addFeedback(FeedBack feedback) {
		return repo.save(feedback);
	}
  public List<FeedBack> getAllFeeds(){
	  return repo.findAll();
  }
  public boolean deleteOrder(int fid) {
  	if(repo.findById(fid).isPresent()) {
  		repo.deleteById(fid);
  		return true;
  	}else {
  		return false;
  	}
  }
  
}
