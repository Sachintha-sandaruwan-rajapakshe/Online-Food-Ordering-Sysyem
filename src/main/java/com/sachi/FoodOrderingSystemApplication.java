package com.sachi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class FoodOrderingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodOrderingSystemApplication.class, args);
	}

}
