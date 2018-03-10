package com.innovationlabs.hitroupe.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "groups")
public class Group {
    private int id;
    private String title;
    private String description;
}
