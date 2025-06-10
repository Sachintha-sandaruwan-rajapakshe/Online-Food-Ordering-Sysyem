package com.sachi.config;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
@EnableWebSecurity
public class AppConfig {
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{
		http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		.authorizeHttpRequests(Authorize -> Authorize.requestMatchers("/api/admin/**").hasAnyRole("RESTAURENT_OWNER","ADMIN") // admin or owner 
		.requestMatchers("/api/**").authenticated() // Authontication person login the system
		.anyRequest().permitAll()//When login or register time no need any token 
		
		).addFilterBefore(new JwtTokenValidator(),BasicAuthenticationFilter.class)
		.csrf(csrf->csrf.disable())
		.cors(cors -> cors.configurationSource(corsConfigurationSource()));
		
		
		return http.build();
	}
	private CorsConfigurationSource corsConfigurationSource() {
	    return request -> {
	        CorsConfiguration cfg = new CorsConfiguration();

	        // ඔබේ frontend එකේ origin එක
	        cfg.setAllowedOrigins(Arrays.asList("http://localhost:3000"));

	        // මෙය අනිවාර්යයි – POST වගේ method වලට අවසර දිය යුතුයි
	        cfg.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

	        cfg.setAllowedHeaders(Arrays.asList("*"));
	        cfg.setExposedHeaders(Arrays.asList("Authorization"));
	        cfg.setAllowCredentials(true);
	        cfg.setMaxAge(3600L);

	        return cfg;
	    };
	}


	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
