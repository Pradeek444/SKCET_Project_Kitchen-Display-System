package com.kds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.models.Analysis;

public interface AnalysisRepo extends JpaRepository<Analysis,Integer> {

}
