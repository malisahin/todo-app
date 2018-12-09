package com.mali.todoapp.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author mali.sahin
 * @since 9.12.2018.
 */
@EnableWebMvc
@ComponentScan("com.mali.todoapp./*")
public class WebConfiguration implements WebMvcConfigurer {

    // ...

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        /*registry.addViewController("/").setViewName("/");
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);*/
    }
}