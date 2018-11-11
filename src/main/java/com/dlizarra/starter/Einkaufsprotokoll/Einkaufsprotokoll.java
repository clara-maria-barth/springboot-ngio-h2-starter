package com.dlizarra.starter.Einkaufsprotokoll;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Entity
public class Einkaufsprotokoll {
    @Id
    @GeneratedValue
    @JsonIgnore

    @Column(unique = true)
    private long id;

    @Column
    private String buyer;

    @Column
    private String date;

    @Column
    private Long price;


public Einkaufsprotokoll(){

}
public Long getId(){
    return id;
}

public void setId(Long id){
    this.id = id;
}
}
