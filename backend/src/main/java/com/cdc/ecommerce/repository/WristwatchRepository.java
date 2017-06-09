package com.cdc.ecommerce.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.cdc.ecommerce.entity.Wristwatch;

@RestResource
public interface WristwatchRepository extends PagingAndSortingRepository<Wristwatch, Integer>{

}
