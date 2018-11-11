package com.dlizarra.starter.scratch;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScratchController {

	@RequestMapping(value = "/scratch/hello", method = RequestMethod.GET)
	public String helloWorld(){
		return "World";
	}

}
