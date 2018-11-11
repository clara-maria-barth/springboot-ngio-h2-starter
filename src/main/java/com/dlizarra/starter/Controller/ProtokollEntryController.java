package com.dlizarra.starter.Controller;

import com.dlizarra.starter.Einkaufsprotokoll.Einkaufsprotokoll;
import com.dlizarra.starter.Service.EinkaufsprotokollSevice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;

@CrossOrigin
@RestController
public class ProtokollEntryController {
    private final String CONTEXT = "/einkaufsprotokolle";
    @Autowired
    private EinkaufsprotokollSevice einkaufsprotokollSevice;

    @GetMapping(value= CONTEXT)
    @ResponseStatus(HttpStatus.OK)
    public List<Einkaufsprotokoll> getEinkaufsprotokolle(){
        return einkaufsprotokollSevice.getEinkaufsprotokolle();
    }

    @PostMapping(value= CONTEXT)
    @ResponseStatus(HttpStatus.CREATED)
    public void createEinkaufsprotokoll(@RequestBody Einkaufsprotokoll protokoll){
        einkaufsprotokollSevice.addEinkaufsprotokoll(protokoll);
    }
/*    @PutMapping(value = CONTEXT)
    @ResponseStatus(HttpStatus.OK)
    public */

    @Transactional
    @RequestMapping(value = CONTEXT + "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void deleteEinkaufsprotokoll(@PathVariable("id") Long id){
        einkaufsprotokollSevice.deleteEinkaufsprotokoll(id);
    }
}
