package com.SE_Pharmacy.Pharmacy_BE.service;

import com.SE_Pharmacy.Pharmacy_BE.po.Window;

import java.util.List;

public interface WindowService {

    void addWindow(Window window);

    void deleteWindow(String wid);

    List<Window> getWindowsByStorehouse(String storehouseId);

    Window getWindowByBillId(Long billId);

    void updateWindow(Window window);
}
