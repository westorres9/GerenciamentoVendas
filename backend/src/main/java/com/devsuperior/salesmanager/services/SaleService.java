package com.devsuperior.salesmanager.services;

import com.devsuperior.salesmanager.DTO.SaleDTO;
import com.devsuperior.salesmanager.entities.Sale;
import com.devsuperior.salesmanager.repositories.SaleRepository;
import com.devsuperior.salesmanager.repositories.UserRepository;
import com.devsuperior.salesmanager.services.exceptions.DatabaseException;
import com.devsuperior.salesmanager.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.lang.module.ResolutionException;
import java.util.Optional;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAllPaged(Pageable pageable) {
        Page<Sale> page = repository.findAll(pageable);
        return page.map(x -> new SaleDTO(x));
    }

    @Transactional(readOnly = true)
    public SaleDTO findById(Long id) {
        Optional<Sale> obj = repository.findById(id);
        Sale entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        return new SaleDTO(entity);
    }

    @Transactional
    public SaleDTO insert(SaleDTO dto) {
        Sale entity = new Sale();
        entity.setDate(dto.getDate());
        entity.setVisited(dto.getVisited());
        entity.setDeals(dto.getDeals());
        entity.setAmount(dto.getAmount());
        entity.setSeller(userRepository.getReferenceById(dto.getSellerId()));
        entity = repository.save(entity);
        return new SaleDTO(entity);
    }

    @Transactional
    public SaleDTO update(Long id, SaleDTO dto) {
        try {
            Sale entity = repository.getReferenceById(id);
            entity.setDate(dto.getDate());
            entity.setVisited(dto.getVisited());
            entity.setDeals(dto.getDeals());
            entity.setAmount(dto.getAmount());
            entity.setSeller(userRepository.getReferenceById(dto.getSellerId()));
            entity = repository.save(entity);
            return new SaleDTO(entity);
        }
        catch (EntityNotFoundException e ) {
            throw new ResourceNotFoundException("Entity not found");
        }
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id not found" + id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }


}
