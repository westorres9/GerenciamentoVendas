package com.devsuperior.salesmanager.services;

import com.devsuperior.salesmanager.DTO.SaleDTO;
import com.devsuperior.salesmanager.DTO.TeamDTO;
import com.devsuperior.salesmanager.entities.Sale;
import com.devsuperior.salesmanager.entities.Team;
import com.devsuperior.salesmanager.repositories.TeamRepository;
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
import java.util.Optional;

@Service
public class TeamService {

    @Autowired
    private TeamRepository repository;
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Page<TeamDTO> findAllPaged(Pageable pageable) {
        Page<Team> page = repository.findAll(pageable);
        return page.map(x -> new TeamDTO(x));
    }

    @Transactional(readOnly = true)
    public TeamDTO findById(Long id) {
        Optional<Team> obj = repository.findById(id);
        Team entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity Not Found"));
        return new TeamDTO(entity);
    }

    @Transactional
    public TeamDTO insert(TeamDTO dto) {
        Team entity = new Team();
        entity.setName(dto.getName());
        entity.setManager(userRepository.getOne(dto.getManagerId()));
        entity = repository.save(entity);
        return new TeamDTO(entity);
    }

    @Transactional
    public TeamDTO update(Long id, TeamDTO dto) {
        try {
            Team entity = repository.getOne(id);
            entity.setName(dto.getName());
            entity.setManager(userRepository.getOne(dto.getManagerId()));
            entity = repository.save(entity);
            return new TeamDTO(entity);
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
