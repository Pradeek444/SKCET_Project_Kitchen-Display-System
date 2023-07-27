package com.kds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.models.Orders;

public interface OrderRepo extends JpaRepository<Orders, Integer> {

}