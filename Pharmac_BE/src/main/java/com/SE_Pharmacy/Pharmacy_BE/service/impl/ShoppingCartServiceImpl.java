package com.SE_Pharmacy.Pharmacy_BE.service.impl;

import com.SE_Pharmacy.Pharmacy_BE.mapper.ShoppingCartMapper;
import com.SE_Pharmacy.Pharmacy_BE.po.ShoppingCart;
import com.SE_Pharmacy.Pharmacy_BE.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    private final ShoppingCartMapper shoppingCartMapper;

    @Autowired
    public ShoppingCartServiceImpl(ShoppingCartMapper shoppingCartMapper) {
        this.shoppingCartMapper = shoppingCartMapper;
    }

    @Override
    public void addShoppingCart(ShoppingCart shoppingCart) {
        shoppingCartMapper.addShoppingCart(shoppingCart);
    }

    @Override
    public void deleteShoppingCart(Long id) {
        shoppingCartMapper.deleteShoppingCart(id);
    }

    @Override
    public List<ShoppingCart> getShoppingCartByUserId(String userId) {
        return shoppingCartMapper.getShoppingCartByUserId(userId);
    }

    @Override
    public List<ShoppingCart> getShoppingCartByStorehouse(String storehouseId) {
        return shoppingCartMapper.getShoppingCartByStorehouse(storehouseId);
    }

    @Override
    public List<ShoppingCart> getShoppingCartByBillId(Long billId) {
        return shoppingCartMapper.getShoppingCartByBillId(billId);
    }

    @Override
    public void updateShoppingCart(ShoppingCart shoppingCart) {
        shoppingCartMapper.updateShoppingCart(shoppingCart);
    }
}
