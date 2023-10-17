package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;

@Entity
@Table(name = "se_window")
public class Window {

    @Id
    @Column(name = "wid", length = 100)
    private String wid;

    @Column(name = "bill_id")
    private Long billId;

    @Column(name = "storehouse_id", length = 100)
    private String storehouseId;

    public String getWid() {
        return wid;
    }

    public void setWid(String wid) {
        this.wid = wid;
    }

    public Long getBillId() {
        return billId;
    }

    public void setBillId(Long billId) {
        this.billId = billId;
    }

    public String getStorehouseId() {
        return storehouseId;
    }

    public void setStorehouseId(String storehouseId) {
        this.storehouseId = storehouseId;
    }
}
