package com.example.back_end.controller;

import com.example.back_end.dto.OrderFormRequest;
import com.example.back_end.service.OrderFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orderforms")
public class OrderFormController {

  @Autowired
  private OrderFormService orderFormService;

  public OrderFormController(OrderFormService orderFormService) {
    this.orderFormService = orderFormService;
  }

  @PostMapping
  public ResponseEntity<String> createOrderForm(@RequestBody OrderFormRequest orderFormRequest) {
    orderFormService.createOrderForm(orderFormRequest);
    return ResponseEntity.status(HttpStatus.CREATED).body("Order form created successfully!");
  }

  @GetMapping("/{participantFormId}")
  public ResponseEntity<Map<String, Object>> getOrderStatus(@PathVariable int participantFormId) {
    Map<String, Object> orderStatus = orderFormService.getOrderStatus(participantFormId);
    return ResponseEntity.ok(orderStatus);
  }

  @GetMapping("/host/{hostformId}")
  public ResponseEntity<Map<String, Object>> getOrderList(@PathVariable int hostformId) {
    List<Map<String, Object>> orderList = orderFormService.getOrderList(hostformId);
    return ResponseEntity.ok(Map.of("orderList", orderList));
  }

  @GetMapping("/menu/{hostformId}")
  public ResponseEntity<Map<String, String>> getMenuImage(@PathVariable int hostformId) {
    String base64Image = orderFormService.getMenuImage(hostformId);
    return ResponseEntity.ok(Map.of("image", base64Image));
  }
}
