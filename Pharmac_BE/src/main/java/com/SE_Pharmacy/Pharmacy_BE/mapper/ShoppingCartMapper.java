package com.SE_Pharmacy.Pharmacy_BE.mapper;

import com.SE_Pharmacy.Pharmacy_BE.po.ShoppingCart;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ShoppingCartMapper {

    @Insert("INSERT INTO shoppingcart (user_id, medicine_id, num, storehouse_id, bill_id) " +
            "VALUES (#{userId}, #{medicineId}, #{num}, #{storehouseId}, #{billId})")
    void addShoppingCart(ShoppingCart shoppingCart);

    @Delete("DELETE FROM shoppingcart WHERE id = #{id}")
    void deleteShoppingCart(Long id);

    @Select("SELECT * FROM shoppingcart WHERE user_id = #{userId}")
    List<ShoppingCart> getShoppingCartByUserId(String userId);

    @Select("SELECT * FROM shoppingcart WHERE storehouse_id = #{storehouseId}")
    List<ShoppingCart> getShoppingCartByStorehouse(String storehouseId);

    @Select("SELECT * FROM shoppingcart WHERE bill_id = #{billId}")
    List<ShoppingCart> getShoppingCartByBillId(Long billId);

    @Update("UPDATE shoppingcart SET user_id = #{userId}, medicine_id = #{medicineId}, " +
            "num = #{num}, storehouse_id = #{storehouseId}, bill_id = #{billId} WHERE id = #{id}")
    void updateShoppingCart(ShoppingCart shoppingCart);
}
