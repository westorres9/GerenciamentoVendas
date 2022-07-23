package com.devsuperior.salesmanager.repositories;

import com.devsuperior.salesmanager.entities.Sale;
import com.devsuperior.salesmanager.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {

    Page<Sale> findBySeller (User seller, Pageable pageable);
}
