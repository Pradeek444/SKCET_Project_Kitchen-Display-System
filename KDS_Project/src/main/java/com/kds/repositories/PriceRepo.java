package com.kds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.models.Price;

public interface PriceRepo extends JpaRepository<Price,Integer> {

}
