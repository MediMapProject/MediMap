package com.medimap.room;

import jakarta.persistence.*;

@Entity
@Table(name = "room")
public class Room
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;

    @Column(nullable = false)
    private String name;

    public Long getId() {return roomId;}
    public String getName() {return name;}
}
