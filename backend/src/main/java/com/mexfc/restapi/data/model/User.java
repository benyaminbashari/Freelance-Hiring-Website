package com.mexfc.restapi.data.model;


import javax.persistence.*;

@Entity
@Table(name="User")
public class User {
    private long id;
    private String name;

    public User() {}
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
