package com.dlizarra.starter.Service;

import com.dlizarra.starter.Einkaufsprotokoll.Einkaufsprotokoll;
import com.dlizarra.starter.Repository.EinkaufsprotokollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Transient;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class EinkaufsprotokollSevice {

    @Autowired
    private EinkaufsprotokollRepository einkaufsprotokollRepository;
/*    @Autowired
    private UserRepository userRepository;*/
public List<Einkaufsprotokoll> getEinkaufsprotokolle(){
    List<Einkaufsprotokoll> protokolle = new ArrayList<>('h');
    einkaufsprotokollRepository.findAll().forEach(protokolle::add);
    return protokolle;
}

public void addEinkaufsprotokoll(Einkaufsprotokoll einkaufsprotokoll){
        einkaufsprotokollRepository.save(einkaufsprotokoll);
}

public void deleteEinkaufsprotokoll(Long id){
    einkaufsprotokollRepository.deleteById(id);
}

public void updateEinkaufsprotokoll(Einkaufsprotokoll einkaufsprotokoll){
    einkaufsprotokollRepository.findById(einkaufsprotokoll.getId());
}
}
