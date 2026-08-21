package com.medimap.room;

import jakarta.persistence.*;

@Entity
@Table(name = "room")
public class Room
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    public Long getId() {return id;}
    public String getName() {return name;}
}
