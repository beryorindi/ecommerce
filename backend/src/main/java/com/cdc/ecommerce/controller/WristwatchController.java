package com.cdc.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cdc.ecommerce.entity.Wristwatch;
import com.cdc.ecommerce.repository.WristwatchRepository;



@Controller
public class WristwatchController {
	@Autowired
	private WristwatchRepository wristWatchRepo;

	public WristwatchController() {}
	
	@GetMapping("/wristwatch")
	@ResponseBody
	public Iterable<Wristwatch> getAll() {
		return wristWatchRepo.findAll();
	}
	
	
}
