package com.devsuperior.salesmanager.resources;

import com.devsuperior.salesmanager.DTO.SaleDTO;
import com.devsuperior.salesmanager.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/sales")
public class SaleResource {

    @Autowired
    private SaleService service;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findAllPaged(Pageable pageable) {
        Page<SaleDTO> page = service.findAllPaged(pageable);
        return ResponseEntity.ok().body(page);
    }
}
