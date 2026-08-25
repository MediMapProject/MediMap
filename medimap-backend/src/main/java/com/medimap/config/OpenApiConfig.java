package com.medimap.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.*;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI mediMapApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("MediMap API")
                        .version("1.0.0")
                        .description("REST API for the MediMap application"));
    }
}