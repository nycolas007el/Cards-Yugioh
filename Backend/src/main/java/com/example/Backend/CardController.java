package com.example.Backend;
import com.example.Backend.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cards")
public class CardController{

    @Autowired
    private CardRepository cardRepo;



   
    @GetMapping 
    public List<Card> listar(){
        return cardRepo.findAll();
    }
    @PostMapping
    public Card cadastrar(@RequestBody Card novoCard){
        return cardRepo.save(novoCard);
    }
}