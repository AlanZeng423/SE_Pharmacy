package com.SE_Pharmacy.Pharmacy_BE.po;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "medicine")
public class Medicine {

    @Id
    @Column(name = "id", length = 10)
    private String id;

    @Column(name = "effective_date")
    private Date effectiveDate;

    @Column(name = "storehouse_id", length = 100)
    private String storehouseId;

    @Column(name = "stock")
    private Integer stock;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getEffectiveDate() {
        return effectiveDate;
    }

    public void setEffectiveDate(Date effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public String getStorehouseId() {
        return storehouseId;
    }

    public void setStorehouseId(String storehouseId) {
        this.storehouseId = storehouseId;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}

