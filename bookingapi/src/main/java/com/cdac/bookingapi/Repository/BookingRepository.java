package com.cdac.bookingapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.cdac.bookingapi.Entity.BookingBean;

public interface BookingRepository extends JpaRepository<BookingBean, Integer>{
    
    
}
