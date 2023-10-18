package com.SE_Pharmacy.Pharmacy_BE.service.impl;

import com.SE_Pharmacy.Pharmacy_BE.mapper.WindowMapper;
import com.SE_Pharmacy.Pharmacy_BE.po.Window;
import com.SE_Pharmacy.Pharmacy_BE.service.WindowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;





@Service
public class WindowServiceImpl implements WindowService {

    private final WindowMapper windowMapper;

    @Autowired
    public WindowServiceImpl(WindowMapper windowMapper) {
        this.windowMapper = windowMapper;
    }

    @Override
    public void addWindow(Window window) {
        windowMapper.addWindow(window);
    }

    @Override
    public void deleteWindow(String wid) {
        windowMapper.deleteWindow(wid);
    }

    @Override
    public List<Window> getWindowsByStorehouse(String storehouseId) {
        return windowMapper.getWindowsByStorehouse(storehouseId);
    }

    @Override
    public Window getWindowByBillId(Long billId) {
        return windowMapper.getWindowByBillId(billId);
    }

    @Override
    public void updateWindow(Window window) {
        windowMapper.updateWindow(window);
    }
}
