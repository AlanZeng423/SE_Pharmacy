package com.SE_Pharmacy.Pharmacy_BE.controller;

import com.SE_Pharmacy.Pharmacy_BE.po.ShoppingCart;
import com.SE_Pharmacy.Pharmacy_BE.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shopping-carts")
public class ShoppingCartController {

    private final ShoppingCartService shoppingCartService;

    @Autowired
    public ShoppingCartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addShoppingCart(@RequestBody ShoppingCart shoppingCart) {
        shoppingCartService.addShoppingCart(shoppingCart);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteShoppingCart(@PathVariable Long id) {
        shoppingCartService.deleteShoppingCart(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ShoppingCart>> getShoppingCartByUserId(@PathVariable String userId) {
        List<ShoppingCart> shoppingCarts = shoppingCartService.getShoppingCartByUserId(userId);
        return new ResponseEntity<>(shoppingCarts, HttpStatus.OK);
    }

    @GetMapping("/storehouse/{storehouseId}")
    public ResponseEntity<List<ShoppingCart>> getShoppingCartByStorehouse(@PathVariable String storehouseId) {
        List<ShoppingCart> shoppingCarts = shoppingCartService.getShoppingCartByStorehouse(storehouseId);
        return new ResponseEntity<>(shoppingCarts, HttpStatus.OK);
    }

    @GetMapping("/bill/{billId}")
    public ResponseEntity<List<ShoppingCart>> getShoppingCartByBillId(@PathVariable Long billId) {
        List<ShoppingCart> shoppingCarts = shoppingCartService.getShoppingCartByBillId(billId);
        return new ResponseEntity<>(shoppingCarts, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updateShoppingCart(@RequestBody ShoppingCart shoppingCart) {
        shoppingCartService.updateShoppingCart(shoppingCart);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
