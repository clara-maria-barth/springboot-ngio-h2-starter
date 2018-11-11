package com.dlizarra.starter.Repository;

import com.dlizarra.starter.Einkaufsprotokoll.Einkaufsprotokoll;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EinkaufsprotokollRepository extends CrudRepository<Einkaufsprotokoll, Long>{
    Einkaufsprotokoll findById(Long id);
    List<Einkaufsprotokoll> deleteById(Long id);
}
