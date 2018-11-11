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


public Einkaufsprotokoll(){

}
public Long getId(){
    return id;
}

public void setId(Long id){
    this.id = id;
}
}
