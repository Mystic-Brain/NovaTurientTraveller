package com.cdac.contactapi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cdac.contactapi.Repository.*;

import com.cdac.contactapi.Bean.ContactBean;
import com.cdac.contactapi.Repository.ContactRepository;
import com.cdac.contactapi.Services.ContactService;

import antlr.collections.List;
import net.bytebuddy.asm.Advice.Return;

import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ContactController {

    @Autowired
    private ContactService service;
    private ContactRepository repository;

    @RequestMapping(method=RequestMethod.POST, value = "/contactus")
    public String addUserContactus(@RequestBody ContactBean bean) {
        System.out.println("we are in controller!");

        return service.addContactData(bean);
        //System.out.println("after controller!");
    }

    //To get contact us data
     @GetMapping("/viewcontact")
     public java.util.List<ContactBean> viewContact(ContactBean bean){
     return service.getAllContact();
     }

    
}
