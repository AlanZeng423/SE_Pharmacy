package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.ShoppingCart;

import java.util.List;

public interface ShoppingCartService {

    void addShoppingCart(ShoppingCart shoppingCart);

    void deleteShoppingCart(Long id);

    List<ShoppingCart> getShoppingCartByUserId(String userId);

    List<ShoppingCart> getShoppingCartByStorehouse(String storehouseId);

    List<ShoppingCart> getShoppingCartByBillId(Long billId);

    void updateShoppingCart(ShoppingCart shoppingCart);
}

