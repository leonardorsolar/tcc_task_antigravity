import requests

def test_health_check_api_status():
    base_url = "http://localhost:3000"
    url = f"{base_url}/health"
    headers = {
        "Accept": "application/json"
    }
    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        data = response.json()
        assert response.status_code == 200, f"Expected status code 200 but got {response.status_code}"
        assert isinstance(data, dict), "Response is not a JSON object"
        assert "status" in data, "'status' field missing in response JSON"
        assert data["status"] == "ok", f"Expected status to be 'ok' but got '{data['status']}'"
    except requests.RequestException as e:
        assert False, f"HTTP request failed: {e}"
    except ValueError:
        assert False, "Response content is not valid JSON"

test_health_check_api_status()