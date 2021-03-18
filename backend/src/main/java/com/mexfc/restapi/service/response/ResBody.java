package com.mexfc.restapi.service.response;

public class ResBody {
    private String name;

    public ResBody(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}