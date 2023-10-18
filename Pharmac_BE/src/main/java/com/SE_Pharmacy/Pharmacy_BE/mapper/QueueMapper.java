package com.SE_Pharmacy.Pharmacy_BE.mapper;

import com.SE_Pharmacy.Pharmacy_BE.po.Queue;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface QueueMapper {

    @Insert("INSERT INTO se_queue (bill_id, storehouse_id) VALUES (#{billId}, #{storehouseId})")
    void addQueue(Queue queue);

    @Delete("DELETE FROM se_queue WHERE qid = #{qid}")
    void deleteQueue(Long qid);

    @Select("SELECT * FROM se_queue WHERE storehouse_id = #{storehouseId}")
    List<Queue> getQueuesByStorehouse(String storehouseId);

    @Select("SELECT * FROM se_queue WHERE bill_id = #{billId}")
    Queue getQueueByBillId(Long billId);

    @Update("UPDATE se_queue SET bill_id = #{billId}, storehouse_id = #{storehouseId} WHERE qid = #{qid}")
    void updateQueue(Queue queue);
}
