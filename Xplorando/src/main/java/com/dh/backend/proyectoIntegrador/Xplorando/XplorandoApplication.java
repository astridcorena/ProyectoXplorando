package com.dh.backend.proyectoIntegrador.Xplorando;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class XplorandoApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(XplorandoApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(XplorandoApplication.class, args);
		LOGGER.info("Xplorando está corriendo ...");

	}

}
