package com.medimap.room;

import jakarta.persistence.*;

@Entity
@Table(name = "room")
public class Room
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;
}
